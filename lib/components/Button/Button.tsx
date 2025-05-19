import {css} from '@emotion/react'

const style = css`
    color: 'red';
`
export const Button = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button css={style} {...props}/>
  )
}
