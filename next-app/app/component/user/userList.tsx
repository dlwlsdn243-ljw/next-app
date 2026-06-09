type UserType = {
    id: number,
    username: string,
    email: string
}

type UserProps = {
    user : UserType
}

function User({user}:UserProps){

    const {id, username, email} = user
    return(
        <div>
            <div>{id}.{username} / {email}</div>
        </div>
    )
}

export default function UserList(){
     const users = [
        {
            id: 1,
            username: 'hong',
            email: 'publicHong@naver.com'
        },
        {
            id: 2,
            username: 'kim',
            email: 'kim@naver.com'
        },
        {
            id: 3,
            username: 'lee',
            email: 'leeTest@gmail.com'
        },
    ];
    return(
        <div>
            {
                users.map((user)=>(
                    <User user={user} key={user.id} />
                ))
            }
        </div>
    )
}