namespace react_playground_backend.Models
{
    public class ReactPlaygroundDBDatabaseSettings : IReactPlaygroundDBDatabaseSettings
    {
        public string TestCollection1CollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }

    public interface IReactPlaygroundDBDatabaseSettings
    {
        string TestCollection1CollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}
