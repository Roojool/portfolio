"use client";

import * as React from "react";
import {
  createContext,
  useContext,
  useMemo,
  type CSSProperties,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import {
  differenceInCalendarDays,
  eachDayOfInterval,
  formatISO,
  getDay,
  getMonth,
  getYear,
  nextDay,
  parseISO,
  subWeeks,
} from "date-fns";
import { cn } from "@/lib/utils";

export type Activity = {
  date: string;
  count: number;
  level: number;
};

type Week = Array<Activity | undefined>;

export type Labels = {
  months?: string[];
  weekdays?: string[];
  totalCount?: string;
  legend?: {
    less?: string;
    more?: string;
  };
};

type MonthLabel = {
  weekIndex: number;
  label: string;
};

const DEFAULT_MONTH_LABELS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const DEFAULT_LABELS: Labels = {
  months: DEFAULT_MONTH_LABELS,
  weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  totalCount: "{{count}} activities in {{year}}",
  legend: {
    less: "Less",
    more: "More",
  },
};

const THEME = cn(
  "data-[level='0']:fill-muted-foreground/10",
  "data-[level='1']:fill-muted-foreground/25",
  "data-[level='2']:fill-muted-foreground/45",
  "data-[level='3']:fill-muted-foreground/70",
  "data-[level='4']:fill-foreground"
);

type ContributionGraphContextType = {
  data: Activity[];
  weeks: Week[];
  blockMargin: number;
  blockRadius: number;
  blockSize: number;
  fontSize: number;
  labels: Labels;
  labelHeight: number;
  maxLevel: number;
  totalCount: number;
  year: number;
  width: number;
  height: number;
};

const ContributionGraphContext =
  createContext<ContributionGraphContextType | null>(null);

export const useContributionGraph = () => {
  const context = useContext(ContributionGraphContext);
  if (!context) {
    throw new Error(
      "ContributionGraph components must be used within a ContributionGraph"
    );
  }
  return context;
};

const fillHoles = (activities: Activity[]): Activity[] => {
  if (activities.length === 0) return [];
  const sortedActivities = [...activities].sort((a, b) =>
    a.date.localeCompare(b.date)
  );
  const calendar = new Map<string, Activity>(
    activities.map((a) => [a.date, a])
  );
  const firstActivity = sortedActivities[0];
  const lastActivity = sortedActivities[sortedActivities.length - 1];
  if (!firstActivity || !lastActivity) return [];

  return eachDayOfInterval({
    start: parseISO(firstActivity.date),
    end: parseISO(lastActivity.date),
  }).map((day) => {
    const date = formatISO(day, { representation: "date" });
    if (calendar.has(date)) {
      return calendar.get(date)!;
    }
    return { date, count: 0, level: 0 };
  });
};

const groupByWeeks = (activities: Activity[], weekStart = 0): Week[] => {
  if (activities.length === 0) return [];
  const normalizedActivities = fillHoles(activities);
  const firstActivity = normalizedActivities[0];
  if (!firstActivity) return [];
  const firstDate = parseISO(firstActivity.date);
  const firstCalendarDate =
    getDay(firstDate) === weekStart
      ? firstDate
      : subWeeks(nextDay(firstDate, weekStart as 0 | 1 | 2 | 3 | 4 | 5 | 6), 1);

  const paddedActivities = [
    ...(new Array(
      Math.max(0, differenceInCalendarDays(firstDate, firstCalendarDate))
    ).fill(undefined) as Activity[]),
    ...normalizedActivities,
  ];

  const numberOfWeeks = Math.ceil(paddedActivities.length / 7);
  return new Array(numberOfWeeks)
    .fill(undefined)
    .map((_, weekIndex) =>
      paddedActivities.slice(weekIndex * 7, weekIndex * 7 + 7)
    );
};

const getMonthLabels = (
  weeks: Week[],
  monthNames: string[] = DEFAULT_MONTH_LABELS
): MonthLabel[] => {
  return weeks
    .reduce<MonthLabel[]>((labels, week, weekIndex) => {
      const firstActivity = week.find((activity) => activity !== undefined);
      if (!firstActivity) return labels;

      const month = monthNames[getMonth(parseISO(firstActivity.date))];
      if (!month) return labels;

      const prevLabel = labels[labels.length - 1];
      if (weekIndex === 0 || !prevLabel || prevLabel.label !== month) {
        return labels.concat({ weekIndex, label: month });
      }
      return labels;
    }, [])
    .filter(({ weekIndex }, index, labels) => {
      const minWeeks = 3;
      if (index === 0) {
        return labels[1] && labels[1].weekIndex - weekIndex >= minWeeks;
      }
      if (index === labels.length - 1) {
        return weeks.slice(weekIndex).length >= minWeeks;
      }
      return true;
    });
};

export type ContributionGraphProps = HTMLAttributes<HTMLDivElement> & {
  data: Activity[];
  blockMargin?: number;
  blockRadius?: number;
  blockSize?: number;
  fontSize?: number;
  labels?: Labels;
  maxLevel?: number;
  style?: CSSProperties;
  totalCount?: number;
  weekStart?: number;
  children: ReactNode;
  className?: string;
};

export function ContributionGraph({
  data,
  blockMargin = 3,
  blockRadius = 2,
  blockSize = 11,
  fontSize = 11,
  labels: labelsProp,
  maxLevel: maxLevelProp = 4,
  style = {},
  totalCount: totalCountProp,
  weekStart = 0,
  className,
  children,
  ...props
}: ContributionGraphProps) {
  const maxLevel = Math.max(1, maxLevelProp);
  const weeks = useMemo(() => groupByWeeks(data, weekStart), [data, weekStart]);
  const LABEL_MARGIN = 8;
  const labels = { ...DEFAULT_LABELS, ...labelsProp };
  const labelHeight = fontSize + LABEL_MARGIN;

  const year =
    data.length > 0
      ? getYear(parseISO(data[data.length - 1].date))
      : new Date().getFullYear();

  const totalCount =
    typeof totalCountProp === "number"
      ? totalCountProp
      : data.reduce((sum, activity) => sum + activity.count, 0);

  const width = Math.max(
    0,
    weeks.length * (blockSize + blockMargin) - blockMargin
  );
  const height = labelHeight + (blockSize + blockMargin) * 7 - blockMargin;

  if (data.length === 0) return null;

  return (
    <ContributionGraphContext.Provider
      value={{
        data,
        weeks,
        blockMargin,
        blockRadius,
        blockSize,
        fontSize,
        labels,
        labelHeight,
        maxLevel,
        totalCount,
        year,
        width,
        height,
      }}
    >
      <div
        className={cn("flex w-max max-w-full flex-col gap-2", className)}
        style={{ fontSize, ...style }}
        {...props}
      >
        {children}
      </div>
    </ContributionGraphContext.Provider>
  );
}

export type ContributionGraphBlockProps = HTMLAttributes<SVGRectElement> & {
  activity: Activity;
  dayIndex: number;
  weekIndex: number;
};

export function ContributionGraphBlock({
  activity,
  dayIndex,
  weekIndex,
  className,
  ...props
}: ContributionGraphBlockProps) {
  const { blockSize, blockMargin, blockRadius, labelHeight } =
    useContributionGraph();

  return (
    <rect
      className={cn(THEME, "cursor-pointer transition-colors", className)}
      data-count={activity.count}
      data-date={activity.date}
      data-level={activity.level}
      height={blockSize}
      rx={blockRadius}
      ry={blockRadius}
      width={blockSize}
      x={(blockSize + blockMargin) * weekIndex}
      y={labelHeight + (blockSize + blockMargin) * dayIndex}
      {...props}
    />
  );
}

export type ContributionGraphCalendarProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  "children"
> & {
  hideMonthLabels?: boolean;
  className?: string;
  children: (props: {
    activity: Activity;
    dayIndex: number;
    weekIndex: number;
  }) => ReactNode;
};

export function ContributionGraphCalendar({
  title = "GitHub Contributions",
  hideMonthLabels = false,
  className,
  children,
  ...props
}: ContributionGraphCalendarProps) {
  const { weeks, width, height, blockSize, blockMargin, labels } =
    useContributionGraph();

  const monthLabels = useMemo(
    () => getMonthLabels(weeks, labels.months),
    [weeks, labels.months]
  );

  return (
    <div
      className={cn(
        "no-scrollbar max-w-full overflow-x-auto overflow-y-hidden px-2",
        className
      )}
      {...props}
    >
      <svg
        className="block overflow-visible"
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        width={width}
      >
        <title>{title}</title>
        {!hideMonthLabels && (
          <g
            data-slot="month-labels"
            className="fill-muted-foreground text-[10px] font-mono select-none"
          >
            {monthLabels.map(({ label, weekIndex }) => (
              <text
                dominantBaseline="hanging"
                key={weekIndex}
                x={(blockSize + blockMargin) * weekIndex}
              >
                {label}
              </text>
            ))}
          </g>
        )}
        {weeks.map((week, weekIndex) =>
          week.map((activity, dayIndex) => {
            if (!activity) return null;
            return (
              <React.Fragment key={`${weekIndex}-${dayIndex}`}>
                {children({ activity, dayIndex, weekIndex })}
              </React.Fragment>
            );
          })
        )}
      </svg>
    </div>
  );
}

export function ContributionGraphFooter({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-between gap-1 whitespace-nowrap px-2 font-mono text-sm sm:gap-x-4",
        className
      )}
      {...props}
    />
  );
}

export function ContributionGraphTotalCount({
  className,
  children,
  ...props
}: Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
  children?: (props: { totalCount: number; year: number }) => ReactNode;
}) {
  const { totalCount, year, labels } = useContributionGraph();

  if (children) {
    return <>{children({ totalCount, year })}</>;
  }

  return (
    <div className={cn("text-muted-foreground", className)} {...props}>
      {labels.totalCount
        ? labels.totalCount
            .replace("{{count}}", String(totalCount))
            .replace("{{year}}", String(year))
        : `${totalCount} activities in ${year}`}
    </div>
  );
}

export function ContributionGraphLegend({
  className,
  children,
  ...props
}: Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
  children?: (props: { level: number }) => ReactNode;
}) {
  const { labels, maxLevel, blockSize, blockRadius, blockMargin } =
    useContributionGraph();

  return (
    <div
      className={cn("ml-auto flex items-center text-xs text-muted-foreground select-none", className)}
      style={{ gap: blockMargin }}
      {...props}
    >
      <span className="mr-1 text-[11px]">
        {labels.legend?.less || "Less"}
      </span>

      {new Array(maxLevel + 1).fill(undefined).map((_, level) =>
        children ? (
          <React.Fragment key={level}>{children({ level })}</React.Fragment>
        ) : (
          <svg height={blockSize} key={level} width={blockSize}>
            <title>{`${level} contributions`}</title>
            <rect
              className={cn(THEME)}
              data-level={level}
              height={blockSize}
              rx={blockRadius}
              ry={blockRadius}
              width={blockSize}
            />
          </svg>
        )
      )}

      <span className="ml-1 text-[11px]">
        {labels.legend?.more || "More"}
      </span>
    </div>
  );
}
