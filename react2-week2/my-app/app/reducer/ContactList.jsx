export default function ContactList({ contacts, selectedId, dispatch }) {
    const handleContactClick = (contactId) => {
        dispatch({
            type: "changed_selection",
            contactId,
        });
    };

    return (
        <section className="flex items-center justify-center  min-h-20%">
            <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4 text-black text-center">Contact List</h2>
                <ul className="flex flex-col  gap-4">
                    {contacts.map((contact) => (
                        <li
                            key={contact.id}
                            className={`${
                                selectedId === contact.id
                                    ? "bg-blue-600 text-black shadow-xl border-l-4 border-blue-800"
                                    : "bg-gray-100 text-black hover:bg-gray-200"
                            } p-4 rounded-lg transition-all duration-200 ease-in-out cursor-pointer`}
                        >
                            <button
                                onClick={() => handleContactClick(contact.id)}
                                className="w-full  text-left text-lg font-medium"
                            >
                                {selectedId === contact.id ? (
                                    <span className="font-bold ">{contact.name}</span>
                                ) : (
                                    contact.name
                                )}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}