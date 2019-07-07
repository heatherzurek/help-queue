function MyStyledComponent() {
  return (
    <div>
      <p className="red-text">Only this paragraph will get da stylez :P</p>
      <style jsx>{`
      .red-text {
          color: red;
      }
      `}</style>
    </div>
  );
}

export default MyStyledComponent;
