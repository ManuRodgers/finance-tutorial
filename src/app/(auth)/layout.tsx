const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mt-5 flex h-full items-center justify-center">
      {children}
    </div>
  );
};

export default AuthLayout;
