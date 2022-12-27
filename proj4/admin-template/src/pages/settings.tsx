import Layout from "../components/template/Layout";
import useAppData from "../data/hook/useAppData";

export default function Settings() {
  const {changeTheme} = useAppData()

  return (
    <>
      <Layout title="Settings Page" subtitle="Your settings can be modified here!">
        <button onClick={changeTheme}>Change Theme</button>
      </Layout>
    </>
  )
}
