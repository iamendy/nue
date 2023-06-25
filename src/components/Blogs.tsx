const Blogs = () => {
  return (
    <div className="space-y-14 lg:space-y-0 lg:flex lg:gap-x-9">
      <div className="flex lg:flex-1 flex-col space-y-4">
        <div className="w-full h-[200px] rounded-md overflow-hidden">
          <img src="/img/blog1.webp" alt="" />
        </div>
        <span className="text-sm text-red">Security</span>
        <h3 className="font-manrope text-lg font-medium">
          Protect Yourself: Why Network Security Should be Your Top Priority
        </h3>
        <p className="text-features">
          Understand the importance of protecting your personal information and
          network security.
        </p>
      </div>

      <div className="flex flex-col space-y-4 lg:flex-1">
        <div className="w-full h-[200px] rounded-md overflow-hidden">
          <img src="/img/blog2.webp" alt="" />
        </div>
        <span className="text-sm text-red">Security</span>
        <h3 className="font-manrope text-lg font-medium">
          10 Essential Security Measures to Protect Your Network
        </h3>
        <p className="text-features">
          Discover 10 crucial security measures every organization should
          implement to safeguard their network.
        </p>
      </div>

      <div className="flex flex-col space-y-4 lg:flex-1">
        <div className="w-full h-[200px] rounded-md overflow-hidden">
          <img src="/img/blog3.webp" alt="" />
        </div>
        <span className="text-sm text-red">Engineering</span>
        <h3 className="font-manrope text-lg font-medium">
          The Role of Engineering in Building Secure Networks
        </h3>
        <p className="text-features">
          Learn how engineering builds strong network infrastructures,
          emphasizing security.
        </p>
      </div>
    </div>
  );
};
export default Blogs;
