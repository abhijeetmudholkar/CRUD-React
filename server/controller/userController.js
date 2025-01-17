import User from "../model/userModel.js";

export const create = async (req, res) => {
    try {
        const userData = new User(req.body);

        if (!userData) {
            return res.status(404).json({ msg: "User data not found" });
        }

        const savedData = await userData.save();
        res.status(200).json(savedData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



export const getAll = async (req, res) => {
    try {
        const userData = await User.find();
        if (userData.length === 0) {
            return res.status(404).json({ msg: "User data not found" });
        }
        res.status(200).json(userData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


export const getOne = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);

        if (!userExist) {
            return res.status(404).json({ msg: "User data not found" });
        }
        res.status(200).json(userExist);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};










export const update = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);

        if (!userExist) {
            return res.status(404).json({ msg: "User data not found" });
        }

        // Update the user properties
        userExist.fname = req.body.fname || userExist.fname;
        userExist.lname = req.body.lname || userExist.lname;
        userExist.email = req.body.email || userExist.email;
        userExist.password = req.body.password || userExist.password;

        // Save the updated user document
        const updatedData = await userExist.save();
        res.status(200).json(updatedData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);
        
        if (!userExist) {
            return res.status(404).json({ msg: "User data not found" });
        }

        await User.findByIdAndDelete(id);
        return res.status(200).json({ msg: "User deleted successfully" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};




