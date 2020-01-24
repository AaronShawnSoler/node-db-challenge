
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Resources').insert([
        {resource_id: 1, resource_name: 'laptop', resource_description: 'This is really useful'},
        {resource_id: 2, resource_name: 'keyboard', resource_description: 'This is kinda useful'},
        {resource_id: 3, resource_name: 'webcam', resource_description: 'This is to see'},
        {resource_id: 4, resource_name: 'storage', resource_description: 'This is for all my stuff'},
      ]);
    });
};
