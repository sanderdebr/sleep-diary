import Head from "~/src/components/Head";
import Home from "~/src/components/Home";
import Left from "~/src/components/Home/Left";
import Right from "~/src/components/Home/Right";

import image from "~/public/home.jpg";
import placeholder from "~/public/home-placeholder.jpg";

function Page() {
  return (
    <>
      <Head title="Home | SleepDiary" />
      <Home>
        <Left>
          <h1>SleepDiary</h1>
          <h3>Please login to your account.</h3>
        </Left>
        <Right alt="home-image" image={image} placeholder={placeholder} />
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
