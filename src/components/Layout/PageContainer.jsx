function PageContainer({ title, children }) {
  return (
    <main className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {title && (
          <h1 className="text-3xl font-bold tracking-tight  mb-8 bg-linear-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent w-fit">
            {title}
          </h1>
        )}
        {children}
      </div>
    </main>
  );
}

export default PageContainer;
