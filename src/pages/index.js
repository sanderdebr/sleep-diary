import Head from "~/src/components/Head";
import Home from "~/src/components/Home";
import Left from "~/src/components/Home/Left";
import Right from "~/src/components/Home/Right";

function Page() {
  return (
    <>
      <Head title="Home | SleepDiary" />
      <Home>
        <Left>
          <h1>SleepDiary</h1>
          <h3>Please login to your account.</h3>
        </Left>
        <Right
          alt="home-image"
          image="./home.jpg"
          placeholder="./home-placeholder.jpg"
        />
      </Home>
    </>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      name: "berend",
    },
  };
};
export default Page;
