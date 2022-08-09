interface MessageProps {
  message: {
    user: string
    message: string
  }
  user: string
}

export const Message = ({ message, user }: MessageProps) => {
  return (
    <li
      className={`${
        message.user === user
          ? 'bg-green-500 rounded-t-xl rounded-l-xl self-end'
          : 'bg-zinc-200 rounded-t-xl rounded-r-xl self-start'
      } max-w-[28.75rem] md:min-w-[10rem] xl:max-w-[38rem] py-3 px-2 text-base md:text-lg leading-tight break-all md:break-words`}
    >
      {message.message}
    </li>
  )
}
