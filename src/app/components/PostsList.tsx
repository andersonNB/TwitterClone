import PostCard from "./PostCard";

export function PostLists({ posts }) {
    return (
        <>
            <pre>
                {
                    posts?.map(post => {


                        const {
                            id,
                            user,
                            content
                        } = post

                        const {
                            user_name: userName,
                            name: userFullName,
                            avatar_url: avatarUrl,
                        } = user

                        return (
                            <PostCard
                                avatarUrl={avatarUrl}
                                content={content}
                                key={id}
                                userFullName={userFullName}
                                userName={userName}
                            />
                        )
                    })
                }

            </pre>
        </>
    );
}