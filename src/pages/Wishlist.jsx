import { useState, useEffect } from "react";
import axios from "axios";

const Wishlist = () => {
    const [wishlist, setWishlist] = useState([]);
    const [newItem, setNewItem] = useState("");
    const [loading, setLoading] = useState(true); // Loading state

    // Base API URL
    const API_BASE_URL = "http://127.0.0.1:8000/sheets";

    // Fetch data from Google Sheets
    const fetchWishlist = async () => {
        setLoading(true); // Set loading to true before fetching
        try {
            const response = await axios.get(`${API_BASE_URL}/data`);
            console.log("API Response:", response.data); // Debugging line
            setWishlist(response.data || []);
        } catch (error) {
            console.error("Error fetching wishlist:", error);
        } finally {
            setLoading(false); // Set loading to false after fetching
        }
    };

    // Add new item to Google Sheets
    const addItem = async () => {
        if (!newItem.trim()) return;

        try {
            await axios.post(`${API_BASE_URL}/update`, { data: newItem });
            setNewItem("");
            fetchWishlist(); // Refresh list after adding
        } catch (error) {
            console.error("Error adding item:", error);
        }
    };

    // Delete item from Google Sheets
    const getCsrfToken = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:8000/csrf-token", {
                withCredentials: true, // Allow cookies
            });
            return response.data.csrfToken;
        } catch (error) {
            console.error("Error fetching CSRF token:", error);
            return null;
        }
    };
    
    
    
    const deleteItem = async (index) => {
        const csrfToken = await getCsrfToken();
        if (!csrfToken) {
            console.error("CSRF token not available");
            return;
        }
    
        try {
            await axios.delete(`${API_BASE_URL}/delete`, {
                headers: {
                    "X-CSRF-TOKEN": csrfToken,
                    "X-Requested-With": "XMLHttpRequest",
                },
                data: { index }, 
                withCredentials: true, // Ensures session cookies are sent
            });
            fetchWishlist(); // Refresh list after deletion
        } catch (error) {
            console.error("Error deleting item:", error);
        }
    };
    

    useEffect(() => {
        fetchWishlist();
    }, []);

    return (
        <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Wishlist</h2>

            {/* Add Item Input */}
            <div className="flex mb-4">
                <input
                    type="text"
                    placeholder="Add new item..."
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    className="flex-1 p-2 border rounded-l-lg"
                />
                <button
                    onClick={addItem}
                    className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600"
                >
                    Add
                </button>
            </div>

            {/* Wishlist Table */}
            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border border-gray-300 px-4 py-2">Product</th>
                        <th className="border border-gray-300 px-4 py-2">Current Price</th>
                        <th className="border border-gray-300 px-4 py-2">Suggested Price</th>
                        <th className="border border-gray-300 px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {loading ? (
                        <tr>
                            <td colSpan="4" className="text-center py-4 text-gray-500">
                                Loading...
                            </td>
                        </tr>
                    ) : wishlist.length > 0 ? (
                        wishlist.map((item, index) => (
                            <tr key={index} className="text-center">
                                <td className="border border-gray-300 px-4 py-2">{item.product}</td>
                                <td className="border border-gray-300 px-4 py-2">₱{item.current_price}</td>
                                <td className="border border-gray-300 px-4 py-2">₱{item.suggested_price}</td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <button
                                        onClick={() => deleteItem(index)}
                                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="text-center py-4 text-gray-500">
                                No items in wishlist
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Wishlist;
