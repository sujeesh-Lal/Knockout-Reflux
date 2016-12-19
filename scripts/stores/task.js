import Reflux from 'reflux';
import todoActions from '../actions/task';

let data = {
  tasks: []
};

export default Reflux.createStore({
  init: function() {
    this.listenToMany(todoActions);
  },
  getTasks() {
    return data.tasks;
  },
  onFetchTasksCompleted(tasks) {
    data.tasks = tasks;
    this.trigger();
  },
  onCreateTask(task) {
    data.tasks.push(task);
    this.trigger();
  }
});
