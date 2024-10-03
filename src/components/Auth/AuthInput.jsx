
function AuthInput({name, type, placeholder, onChange}) {
    return (
        <div className="">
            <input
                className="py-4 bg-black placeholder:text-gray-200 border border-1 border-gray-200 rounded w-[100%] text-white font-serif font-medium placeholder:px-4" name={name} type={type} placeholder={placeholder} onChange={onChange} />
        </div>
    );
}

export default AuthInput;