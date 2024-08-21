import { Model } from "objection";
import Users from "./users";

class Tasks extends Model {
    id!: number;
    title!: string;
    description!: string;
    user_id!: number;
    static get tableName() {
        return 'tasks'
    }
    static get timestamps() {
        return true;
    }
    static get relationMappings() {
        return {
            projects: {
                relation: Model.BelongsToOneRelation,
                modelClass: Users,
                join: {
                    from: "tasks.user_id",
                    to: "users.id",
                }
            },
        }
    }
}
export default Tasks