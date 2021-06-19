import React, {useEffect} from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelecor } from "../hooks/useTypedSelector";
import { fetchUsers } from "../store/action-creators/user";

const UserList: React.FC = () => {
    const {users, loading, error} = useTypedSelecor(state => state.user);
    const {fetchUsers} = useActions();
    useEffect(() => {
        fetchUsers();
    }, []);
    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }
    return (
        <div className="user-list">
            {
                users.map(user => <div key={user.id}>{user.name}</div>)
            }
        </div>
    )
};

export default UserList;