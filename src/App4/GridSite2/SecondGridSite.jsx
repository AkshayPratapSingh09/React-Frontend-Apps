import React from 'react'
import styles from "./SecondGrid.module.css";

const SecondGridSite = () => {
  return (
    <div className={styles.container}>
        <div className={styles.gridcontainer}>
            <header className={styles.header}>
                <h1>The fog Wall</h1>
            </header>
            <nav className={styles.nav}>
                <p>Categories</p>
                <li>Films & Cinema</li>
                <li>Books & Reading</li>
                <li>Games & Consoles</li>
                <li>Food & drink</li>
                <li>World News</li>
                <li>Outdoor Living</li>
            </nav>
            <article className={styles.article}>
                <h2>The best 5 Open World Adventure Games</h2>
                <img width="350px" src="https://plus.unsplash.com/premium_photo-1724711254879-20baf3d2fb10?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas neque quae natus maiores maxime sunt labore, adipisci voluptatibus saepe obcaecati molestiae. Eos eius animi voluptatem nisi quos aliquid aliquam, ipsam delectus architecto placeat, consequatur neque quas! Saepe eum quidem ducimus repudiandae, fugiat beatae nostrum non ab, eveniet et debitis vel?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas neque quae natus maiores maxime sunt labore, adipisci voluptatibus saepe obcaecati molestiae. Eos eius animi voluptatem nisi quos aliquid aliquam, ipsam delectus architecto placeat, consequatur neque quas! Saepe eum quidem ducimus repudiandae, fugiat beatae nostrum non ab, eveniet et debitis vel?</p>
            </article>
            <aside className={styles.aside}>
                <ul className={styles.ul}>
                    <li>
                        <p><strong>Published on:</strong></p>
                        <p>May 6th 2022</p>
                    </li>
                    <li>
                        <p><strong>In the Category:</strong></p>
                        <p>Games & Consoles</p>
                    </li>
                    <li>
                        <p><strong>Written By:</strong></p>
                        <p>Mario</p>
                    </li>
                </ul>
            </aside>
            <footer className={styles.footer}>
                <p>Copyright 2022 The Fog Wall</p>
            </footer>
        </div>
    </div>
  )
}

export default SecondGridSite