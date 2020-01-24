
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Tasks').insert([
        {task_id: 1, task_description: 'This is a task I have to complete', task_notes: 'this is a task note', project_id: 1},
        {task_id: 2, task_description: 'This is a task I have to complete later', task_notes: 'this is a task note', project_id: 1},
        {task_id: 3, task_description: 'This is a task I have to complete now', task_notes: 'this is a task note', project_id: 2},
        {task_id: 4, task_description: 'This is a task I have to complete never', task_notes: 'this is a task note', project_id: 2},
      ]);
    });
};
