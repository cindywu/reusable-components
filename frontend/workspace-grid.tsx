import React from 'react'
import styles from './workspace-grid.module.css'

export default function WorkspaceGrid() {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.nav}>
          Nav
        </div>
        <div className={styles.sidebar}>
          Sidebar
        </div>
        <div className={styles.main}>
          Main
        </div>
        <div className={styles.gutter}>
          Gutter
        </div>
      </div>
    </div>
  )
}
