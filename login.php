<?php
$host = "localhost";
$username = "root";      // agar aapne user/password change nahi kiya
$password = "";          // default XAMPP me password blank hota hai
$dbname = "techni_lm";

// Connect to MySQL
$conn = new mysqli($host, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get login form data
$userId = $_POST['uniqueId'];
$userPass = $_POST['password'];

// SQL query to check user
$sql = "SELECT * FROM users WHERE id='$userId' AND password='$userPass'";
$result = $conn->query($sql);

if ($result->num_rows === 1) {
    $row = $result->fetch_assoc();
    $department = $row['department'];
    // Redirect to course page
    header("Location: ${department}_course.html");
} else {
    echo "<script>alert('Invalid ID or password'); window.location.href = 'login.html';</script>";
}
$conn->close();
?>
