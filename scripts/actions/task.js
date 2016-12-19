import Reflux from 'reflux';
import { getTasks } from '../services/task';

const todoActions = Reflux.createActions({
  fetchTasks: {
    asyncResult: true
  },
  createTask: {
    asyncResult: false
  }
});

todoActions.fetchTasks.listen(function() {
  getTasks((err, tasks) => {
    if(err) {
      return this.failed(err);
    }
    this.completed(tasks);
  });
});

export default todoActions;
