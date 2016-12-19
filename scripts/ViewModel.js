import ko from 'knockout';
import mapping from 'knockout.mapping';
import todoStore from './stores/task';
import todoActions from './actions/task';

export default class ViewModel {
  constructor() {
    mapping.fromJS(this.getTask(), {}, this);
    this.taskName = ko.observable();

    todoStore.listen(this.update.bind(this));
    todoActions.fetchTasks();
  }
  submit() {
    todoActions.createTask({
      name: this.taskName()
    });
    this.taskName('');
  }
  update() {
    mapping.fromJS(this.getTask(), this);
  }
  getTask() {
    return {
      tasks: todoStore.getTasks()
    };
  }
};
