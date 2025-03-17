export default function Footer() {
  return (
    <footer className='py-8 px-4 text-center text-[#8E8E93] dark:text-[#98989D]'>
      <div className='container mx-auto'>
        <p>
          {new Date().getFullYear()} Ketan Choyal. All rights
          reserved.
        </p>
      </div>
    </footer>
  )
}
