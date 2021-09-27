using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace react_playground_backend.Models
{
    public class TestCollection1
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}