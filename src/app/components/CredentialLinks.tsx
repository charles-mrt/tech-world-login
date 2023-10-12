import Link from "next/link"

interface CredentialLinksProps {
  rote: string
  text_color: string
  border?: boolean
  name: string

}

export const CredentialLinks = ({ rote, text_color, border, name }: CredentialLinksProps) => {
  return (
    <Link
      href={`/${rote}`}
      className={
        `${text_color}
        text-3xl 
        ${border ? "border-b-2" : ""}
        border-violet-500 
        pb-1`}
    >
      {name}
    </Link>
  )
}