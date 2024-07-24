<?php
// Dummy array to store tasks (in a real app, use a database)
$tasks = array(
    array('title' => 'Task 1', 'date' => '2023-01-01', 'description' => 'Description for Task 1'),
    array('title' => 'Task 2', 'date' => '2023-02-01', 'description' => 'Description for Task 2'),
);

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Return tasks as JSON for GET requests
    echo json_encode($tasks);
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Add task for POST requests
    $newTask = array(
        'title' => $_POST['title'],
        'date' => $_POST['date'],
        'description' => $_POST['description'],
    );
    array_push($tasks, $newTask);
    echo 'Task added successfully!';
}
?>
