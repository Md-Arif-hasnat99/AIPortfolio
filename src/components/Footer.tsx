export default function Footer() {
  return (
    <footer className="w-full flex flex-col">
      {/* Social Links Section */}
      <div className="bg-white py-16 flex justify-center">
        <div className="flex gap-4 sm:gap-6 items-center">
          <a className="w-16 h-24 sm:w-20 sm:h-28 bg-uno-red rounded-lg border-[3px] sm:border-4 border-white shadow-[0_0_0_3px_black,4px_6px_0px_2px_black] flex items-center justify-center hover:-translate-y-2 hover:scale-105 transition-all transform rotate-[-6deg]" href="https://twitter.com/MdArifHasnat6" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 462.799" className="w-8 h-8 sm:w-10 sm:h-10" fill="white" fill-rule="evenodd" clip-rule="evenodd">
              <path fill-rule="nonzero" d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"/>
            </svg>
          </a>
          <a className="w-16 h-24 sm:w-20 sm:h-28 bg-uno-blue rounded-lg border-[3px] sm:border-4 border-white shadow-[0_0_0_3px_black,4px_6px_0px_2px_black] flex items-center justify-center hover:-translate-y-2 hover:scale-105 transition-all transform rotate-[4deg]" href="https://www.linkedin.com/in/md-arif-hasnat-57932b229/" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8 sm:w-10 sm:h-10">
              <path d="M12.6186 9.69215C12.6186 10.6267 11.8085 11.3843 10.8093 11.3843C9.81004 11.3843 9 10.6267 9 9.69215C9 8.7576 9.81004 8 10.8093 8C11.8085 8 12.6186 8.7576 12.6186 9.69215Z" fill="white"/>
              <path d="M9.24742 12.6281H12.3402V22H9.24742V12.6281Z" fill="white"/>
              <path d="M17.3196 12.6281H14.2268V22H17.3196C17.3196 22 17.3196 19.0496 17.3196 17.2049C17.3196 16.0976 17.6977 14.9855 19.2062 14.9855C20.911 14.9855 20.9008 16.4345 20.8928 17.5571C20.8824 19.0244 20.9072 20.5219 20.9072 22H24V17.0537C23.9738 13.8954 23.1508 12.4401 20.4433 12.4401C18.8354 12.4401 17.8387 13.1701 17.3196 13.8305V12.6281Z" fill="white"/>
            </svg>
          </a>
          <a className="w-16 h-24 sm:w-20 sm:h-28 bg-uno-green rounded-lg border-[3px] sm:border-4 border-white shadow-[0_0_0_3px_black,4px_6px_0px_2px_black] flex items-center justify-center hover:-translate-y-2 hover:scale-105 transition-all transform rotate-[-3deg]" href="https://github.com/Md-Arif-hasnat99" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="white"/>
            </svg>
          </a>
          <a className="w-16 h-24 sm:w-20 sm:h-28 bg-uno-yellow rounded-lg border-[3px] sm:border-4 border-white shadow-[0_0_0_3px_black,4px_6px_0px_2px_black] flex items-center justify-center hover:-translate-y-2 hover:scale-105 transition-all transform rotate-[5deg]" href="https://discord.com/users/mdarifhasnat06" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8 sm:w-10 sm:h-10">
              <path d="M23.6361 9.33998C22.212 8.71399 20.6892 8.25903 19.0973 8C18.9018 8.33209 18.6734 8.77875 18.5159 9.13408C16.8236 8.89498 15.1469 8.89498 13.4857 9.13408C13.3283 8.77875 13.0946 8.33209 12.8974 8C11.3037 8.25903 9.77927 8.71565 8.35518 9.3433C5.48276 13.4213 4.70409 17.3981 5.09342 21.3184C6.99856 22.6551 8.84487 23.467 10.66 23.9983C11.1082 23.4189 11.5079 22.8029 11.8523 22.1536C11.1964 21.9195 10.5683 21.6306 9.9748 21.2951C10.1323 21.1856 10.2863 21.071 10.4351 20.9531C14.0551 22.5438 17.9881 22.5438 21.5649 20.9531C21.7154 21.071 21.8694 21.1856 22.0251 21.2951C21.4299 21.6322 20.8 21.9211 20.1442 22.1553C20.4885 22.8029 20.8865 23.4205 21.3364 24C23.1533 23.4687 25.0013 22.6567 26.9065 21.3184C27.3633 16.7738 26.1261 12.8335 23.6361 9.33998ZM12.3454 18.9075C11.2587 18.9075 10.3676 17.9543 10.3676 16.7937C10.3676 15.6331 11.2397 14.6783 12.3454 14.6783C13.4511 14.6783 14.3422 15.6314 14.3232 16.7937C14.325 17.9543 13.4511 18.9075 12.3454 18.9075ZM19.6545 18.9075C18.5678 18.9075 17.6767 17.9543 17.6767 16.7937C17.6767 15.6331 18.5488 14.6783 19.6545 14.6783C20.7602 14.6783 21.6514 15.6314 21.6323 16.7937C21.6323 17.9543 20.7602 18.9075 19.6545 18.9075Z" fill="white"/>
            </svg>
          </a>
        </div>
      </div>
      
      {/* Black Footer Bar */}
      <div className="bg-black py-8 px-10 border-t-4 border-black">
        <div className="flex items-center justify-center gap-2">
          <span className="text-lg font-black italic" style={{background: "linear-gradient(180deg, #ffaa00 0%, #ff5555 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"}}>Md Arif Hasnat</span>
          <span className="text-gray-400 font-bold text-sm">© 2026</span>
        </div>
      </div>
    </footer>
  );
}
