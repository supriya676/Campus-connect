import Link from "next/link";
import { Portal } from "@/components/Portal";
import { assignments,courses } from "@/data";

const overview = [
  ["Courses this semester", "06", "Across your programme"],
  ["To hand in", "04", "Keep an eye on these"],
  ["Completed", "18", "You're making progress"],
  ["Attendance", "87%", "12 points above minimum"]
];

export default function Dashboard() {
  const upcoming = assignments.filter(assignment => assignment.status !== "Submitted");
  const strongestCourse = courses.reduce((best, course) => course.progress > best.progress ? course : best, courses[0]);

  return <Portal>
    <div className="dashboard-page">
      <header className="dashboard-intro">
        <div>
          <div className="dashboard-overline">FRIDAY, 6 NOVEMBER 2026 <span /> SEMESTER 5</div>
          <h1>Hi, Supriya.</h1>
          <p>Your semester at a glance. Pick up where you left off.</p>
        </div>
        <Link className="dashboard-action" href="/assignments">Go to assignments <span>↗</span></Link>
      </header>

      <section className="dashboard-feature">
        <div className="focus-panel">
          <div className="focus-label"><span className="focus-dot" /> A GOOD PLACE TO BE</div>
          <h2>You’re 12 points<br />above the line.</h2>
          <p>Your attendance is comfortably ahead of the 75% minimum. Keep it there.</p>
          <div className="attendance-block">
            <div className="attendance-heading"><span>Attendance this semester</span><strong>87%</strong></div>
            <div className="attendance-track"><span /></div>
            <div className="attendance-foot"><span>Current</span><span>75% required</span></div>
          </div>
          <Link href="/profile" className="focus-link">View your student profile <span>→</span></Link>
          <span className="focus-index">01 / 04</span>
        </div>

        <div className="agenda-panel">
          <div className="agenda-heading">
            <div><span className="panel-overline">DON’T LET THESE SNEAK UP</span><h2>Coming up</h2></div>
            <span className="agenda-count">{upcoming.length} tasks</span>
          </div>
          <div className="agenda-list">
            {upcoming.map((assignment, index) => (
              <div className="agenda-item" key={assignment.id}>
                <span className="agenda-number">0{index + 1}</span>
                <div className="agenda-copy">
                  <strong>{assignment.title}</strong>
                  <span>{assignment.course}</span>
                </div>
                <time>{assignment.due}</time>
              </div>
            ))}
          </div>
          <Link href="/assignments" className="agenda-all">See your full assignment list <span>→</span></Link>
        </div>
      </section>

      <section className="overview-strip" aria-label="Semester overview">
        {overview.map(([label, value, note], index) => (
          <div className="overview-item" key={label}>
            <span className="overview-index">0{index + 1}</span>
            <div>
              <span className="overview-label">{label}</span>
              <strong className="overview-value">{value}</strong>
              <span className="overview-note">{note}</span>
            </div>
          </div>
        ))}
      </section>

      <section className="dashboard-lower">
        <div className="learning-panel">
          <div className="lower-heading">
            <div><span className="panel-overline">WHAT YOU’RE WORKING ON</span><h2>Your courses</h2></div>
            <Link href="/courses">All courses <span>→</span></Link>
          </div>
          <div className="learning-list">
            {courses.slice(0, 4).map((course, index) => (
              <Link className="learning-row" href={`/courses/${course.id}`} key={course.id}>
                <span className={`learning-mark learning-mark-${index + 1}`}>{["F", "D", "A", "O"][index]}</span>
                <span className="learning-name"><strong>{course.name}</strong><small>{course.code}</small></span>
                <span className="learning-progress"><span className="learning-track"><span style={{width: `${course.progress}%`}} /></span><small>{course.progress}%</small></span>
                <span className="learning-arrow">↗</span>
              </Link>
            ))}
          </div>
        </div>

        <aside className="course-highlight">
          <span className="panel-overline">YOUR STRONGEST PROGRESS</span>
          <div className="highlight-number">{String(strongestCourse.progress).padStart(2, "0")}<span>%</span></div>
          <h2>{strongestCourse.name}</h2>
          <p>{strongestCourse.code} <span /> {strongestCourse.credits} credits</p>
          <div className="highlight-track"><span style={{width: `${strongestCourse.progress}%`}} /></div>
          <Link href={`/courses/${strongestCourse.id}`}>See course details <span>→</span></Link>
        </aside>
      </section>
    </div>
  </Portal>;
}
