import React, { useState } from "react";

const ReportedComments = () => {
  const [reports, setReports] = useState([
    {
      id: 1,
      user: "John Doe",
      comment: "This is offensive content!",
      reportReason: "Offensive Language",
      status: "Pending",
      reportedAt: "2025-01-15T14:32:00",
    },
    {
      id: 2,
      user: "Jane Smith",
      comment: "Check out my link here: spam.com",
      reportReason: "Spam",
      status: "Pending",
      reportedAt: "2025-01-16T09:22:00",
    },
  ]);

  const handleAction = (id, action) => {
    // Update the report status and perform corresponding action
    setReports(
      reports.map((report) => {
        if (report.id === id) {
          return {
            ...report,
            status: action === "resolved" ? "Resolved" : "Action Taken",
          };
        }
        return report;
      })
    );

    if (action === "remove") {
      // Perform remove action (e.g., delete comment from database)
      console.log(`Comment with id ${id} has been removed.`);
    } else if (action === "ban") {
      // Perform user ban action
      console.log(`User ${reports.find((r) => r.id === id).user} has been banned.`);
    } else if (action === "warn") {
      // Send a warning to the user
      console.log(`User ${reports.find((r) => r.id === id).user} has been warned.`);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Reported Activities & Comments</h2>
      <table className="table w-full table-zebra">
        <thead>
          <tr>
            <th>User</th>
            <th>Comment</th>
            <th>Reason</th>
            <th>Reported At</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={report.id}>
              <td>{report.user}</td>
              <td>{report.comment}</td>
              <td>{report.reportReason}</td>
              <td>{new Date(report.reportedAt).toLocaleString()}</td>
              <td>{report.status}</td>
              <td className="space-x-2">
                <button
                  onClick={() => handleAction(report.id, "remove")}
                  className="btn btn-danger"
                >
                  Remove Comment
                </button>
                <button
                  onClick={() => handleAction(report.id, "ban")}
                  className="btn btn-warning"
                >
                  Ban User
                </button>
                <button
                  onClick={() => handleAction(report.id, "warn")}
                  className="btn btn-info"
                >
                  Warn User
                </button>
                <button
                  onClick={() => handleAction(report.id, "resolved")}
                  className="btn btn-success"
                >
                  Mark as Resolved
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportedComments;
