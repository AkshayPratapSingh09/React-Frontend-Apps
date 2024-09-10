import React from "react";
import styles from "./GridSite.module.css";

const FirstGridSite = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Globe Roamer</h1>
      </header>
      <main className={styles.gridcontainer}>
        <article className={`${styles.article} ${styles.featured}`}>
          <img
            src="https://images.unsplash.com/photo-1719430792808-bf4ec5feb363?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width="350px"
            alt=""
          />

          <div>
            <h2 className={styles.h1}>Ballon Magic</h2>
            <p className={styles.p}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              nam consectetur, similique molestiae possimus alias ea voluptates,
              provident architecto dolorem recusandae culpa quos ratione
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              nam consectetur, similique molestiae possimus alias ea voluptates,
              provident architecto dolorem recusandae culpa quos ratione
            </p>
        
          </div>
        </article>
        <article className={styles.article}>
            <img src="https://plus.unsplash.com/premium_vector-1720283428884-297705e93daa?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" width="350px"/>
            <div>
                <h3 className={styles.h3}>Ballon Magic</h3>
                <p className={styles.p}>
                dolores obcaecati earum quibusdam, officia expedita in culpa
            corporis inventore nemo iste modi consequatur nihil facilis ex animi
            distinctio, iusto adipisci debitis architecto natus! Vero, dolorum
            eveniet.
                </p>
            </div>
        </article>
        <article className={styles.article}>
            <img src="https://images.unsplash.com/photo-1556559322-b5071efadc88?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" width="350px"/>
            <div>
                <h3 className={styles.h3}>Ballon Magic</h3>
                <p className={styles.p}>
                dolores obcaecati earum quibusdam, officia expedita in culpa
            corporis inventore nemo iste modi consequatur nihil facilis ex animi
            distinctio, iusto adipisci debitis architecto natus! Vero, dolorum
            eveniet.
                </p>
            </div>
        </article>
        <article className={styles.article}>
            <img src="https://images.unsplash.com/photo-1675325152993-b3a5fa7f0356?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" width="350px"/>
            <div>
                <h3 className={styles.h3}>Ballon Magic</h3>
                <p className={styles.p}>
                dolores obcaecati earum quibusdam, officia expedita in culpa
            corporis inventore nemo iste modi consequatur nihil facilis ex animi
            distinctio, iusto adipisci debitis architecto natus! Vero, dolorum
            eveniet.
                </p>
            </div>
        </article>
        <article className={styles.article}>
            <img src="https://images.unsplash.com/photo-1675325152993-b3a5fa7f0356?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" width="350px"/>
            <div>
                <h3 className={styles.h3}>Ballon Magic</h3>
                <p className={styles.p}>
                dolores obcaecati earum quibusdam, officia expedita in culpa
            corporis inventore nemo iste modi consequatur nihil facilis ex animi
            distinctio, iusto adipisci debitis architecto natus! Vero, dolorum
            eveniet.
                </p>
            </div>
        </article>
      </main>
    </div>
  );
};

export default FirstGridSite;