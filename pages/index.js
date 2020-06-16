import Head from "~/components/Head";

function Page(props) {
  return (
    <>
      <Head title="Home | SleepDiary" />
      <h1>SleepDiary - {props.name}</h1>
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
