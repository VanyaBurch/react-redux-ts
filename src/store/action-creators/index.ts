import * as UseActionsCreator from './user';
import * as TodoActionCreator from './todo';

export default {
    ...TodoActionCreator,
    ...UseActionsCreator
}