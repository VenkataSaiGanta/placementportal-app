import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='container px-4 2xl:px-20 mx-auto flex items-center justify-between gap-4 py-3 mt-20'>
      <img width={160} src={assets.logo} alt="" />
      <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>Copyright @venkatasaiganta@gmail.com | All right reserved.</p>
      <div className='flex gap-2.5'>
        <img
  width={38}
  src={assets.facebook_icon}
  alt="Facebook"
  onClick={() => window.open('https://www.facebook.com/profile.php?id=100084111232951', '_blank')}
/>

<img
  width={38}
  src={assets.instagram_icon}
  alt="Instagram"
  onClick={() => window.open('https://www.instagram.com/c_h_i_n_t_u_s_a_i/', '_blank')}
/>

      </div>
    </div>
  )
}

export default Footer