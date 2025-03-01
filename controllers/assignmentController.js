const db = require('../config/db');

exports.uploadAssignment = (req, res) => {
    const student_id = req.user.id;

    // Check if a file was uploaded
    if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
    }

    const file_name = req.file.originalname;
    const file_data = req.file.buffer; // The actual file content
    const file_mimetype = req.file.mimetype;

    // Save file data in MySQL as BLOB
    db.query(
        'INSERT INTO assignments (student_id, file_name, file_data, file_mimetype) VALUES (?, ?, ?, ?)',
        [student_id, file_name, file_data, file_mimetype],
        (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(201).json({ message: 'Assignment uploaded successfully' });
        }
    );
};



exports.viewAssignments = (req, res) => {
    const student_id = req.user.id;

    db.query(
        'SELECT id, file_name, file_mimetype FROM assignments WHERE student_id = ?', 
        [student_id], 
        (err, results) => {
            if (err) return res.status(500).json({ error: err.message });

            if (results.length === 0) {
                return res.status(404).json({ message: "No assignments found" });
            }

            res.json(results);
        }
    );
};


exports.reviewAssignment = (req, res) => {
    const { id, status, feedback } = req.body;
    if (req.user.role !== 'admin') return res.status(403).json({ error: 'Access Denied' });

    db.query('UPDATE assignments SET status = ?, feedback = ? WHERE id = ?', [status, feedback, id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Assignment reviewed successfully' });
    });
};
