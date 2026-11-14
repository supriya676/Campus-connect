import { Portal,PageHead } from "@/components/Portal";
const details = [
  ["Full Name", "Supriya Singh"],
  ["Email", "supriya.singh@campus.edu"],
  ["Roll Number", "CS202401"],
  ["Department", "Computer Science"],
  ["Semester", "5"],
  ["Phone", "+91 98765 43210"],
  ["Academic Year", "2026–27"],
  ["Mentor", "Shisupal Singh"]
];

export default function Profile() {
  return <Portal>
    <PageHead title="My Profile" subtitle="Your personal and academic information, all in one place." />
    <div className="profile-card">
      <div className="profile-banner" />
      <div className="profile-body">
        <div className="profile-head">
          <div className="big-avatar">SS</div>
          <div>
            <h2 className="profile-name">Supriya Singh</h2>
            <div className="muted">Computer Science · 3rd Year</div>
          </div>
          <span className="pill profile-status">Active Student</span>
        </div>
        <div className="profile-divider" />
        <h3 className="profile-section-title">Personal &amp; Academic Details</h3>
        <div className="info-grid">{details.map(([label, value]) =>
          <div className="info-item" key={label}>
            <div className="info-label">{label}</div>
            <div className="info-value">{value}</div>
          </div>
        )}</div>
      </div>
    </div>
  </Portal>;
}
