export interface IFooter {
  className?: string
  footerProps?: any
}

const Footer = ({ className, footerProps }: IFooter) => {
  return (
    <footer
      {...footerProps}
      className={`w-full p-5 bg-slate-100 text-slate-500 ${className}`}
    >
      <p>Footer Canada</p>
    </footer>
  )
}

export default Footer
