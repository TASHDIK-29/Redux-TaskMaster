import { deleteUser } from "@/redux/features/user/userSlice";
import { Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";

interface IProp {
    user: {
        id: string;
        name: string;
    }
}

const UserCard = ({ user }: IProp) => {
    const dispatch = useDispatch();

    return (
        <div className="flex justify-between items-center p-4 border border-slate-500 rounded-2xl">
            <h1 className="text-[24px]">{user.name}</h1>

            <Trash2 className="text-red-500"
                onClick={() => dispatch(deleteUser(user.id))}
            />
        </div>
    );
};

export default UserCard;