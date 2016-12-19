const mockTasks = [
  {name: 'Requirement Analysis'}
];

export const getTasks = function(callback) {
  setTimeout(function() {
    callback(null, mockTasks);
  }, 300);
};
