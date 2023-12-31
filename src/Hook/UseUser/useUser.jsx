import { useQuery } from '@tanstack/react-query'

const UseUser = () => {
    

    const { refetch,data:users } = useQuery({
        queryKey: ['users'],
        queryFn: async()=>{
            const response= await fetch('https://task-server-pied-gamma.vercel.app/user')
            return response.json();
        },
        initialData:[]
        
      })
    //   console.log(users)
      return [refetch,users]
};

export default UseUser;