import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>News</span>
      </h1>
      <p styles={headerStyles.description}>Keep up to date with the lasted web dev news</p>
    </div>
  )
}

export default Header
