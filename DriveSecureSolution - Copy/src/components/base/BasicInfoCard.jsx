import users from "../../assets/media/users-img.png"

// Helper: Converts camelCase / keyName to Label (Dealer Name, Mobile No, etc.)
const formatLabel = (str) => {
    return str
        .replace(/([A-Z])/g, " $1")
        .replace(/_/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase())
        .trim();
};

const BasicInfoCard = ({
    data = {},
    Heading = "Basic Info",
    url,
    Switch,
    DetailsMore
}) => {
    const { imgSrc, isActive } = data;

    return (
        <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 mx-auto">
            {/* Header */}
            <div className="bg-primary text-start text-white font-semibold px-5 py-2">
                {Heading}
            </div>


            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-10 p-6">

                {/* RIGHT IMAGE + TOGGLE */}
                <div className="flex flex-col items-center space-y-4">
                    {/* User Image */}
                    <div className="shrink-0 w-32 h-32 rounded-2xl bg-amber-300">
                        <img
                            src={users}
                            alt="profile avatar"
                            className=" shadow-sm object-cover rounded-2xl"
                        />
                    </div>

                    {/* Toggle Switch */}

                    {
                        Switch
                    }

                </div>
                {/* LEFT CONTENT */}
                <div className="flex-1   text-gray-800 text-sm space-y-2">
                    {Object.keys(data).map((key) =>
                        key !== "imgSrc" && key !== "isActive" ? (
                            <p key={key}>
                                <span className="font-semibold">{formatLabel(key)}:</span>{" "}
                                {data[key] || "-"}
                            </p>
                        ) : null
                    )}
                </div>

            </div>

        </div>
    );
};

export default BasicInfoCard;
