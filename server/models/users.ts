import { Model } from "objection";
import Tasks from "./tasks";

class Users extends Model {
    id!: number;
    username!: string;
    email!: string;
    static get tableName() {
        return 'users'
    }
    static get timestamps() {
        return true;
    }
    static get relationMappings() {
        return {
            projects: {
                relation: Model.HasManyRelation,
                modelClass: Tasks,
                join: {
                    from: "users.id",
                    to: "tasks.user_id",
                }
            },
        }
    }
}
export default Users