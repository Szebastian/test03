import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { QwikLogo } from "../../icons/qwik";
import styles from "./navbar.module.css";



export default component$(() => {

  return (
    <header class={styles.header}>
      <div class={["container", styles.wrapper]}>
        <div class={styles.logo}>
          <Link href="/">
            <QwikLogo height={50} />
          </Link>
        </div>
        <ul>

          <li>

            <Link href="/animales/lista/">RAZAS DE ANIMALES</Link>
          </li>
        </ul>
      </div>
    </header>
  );
});
