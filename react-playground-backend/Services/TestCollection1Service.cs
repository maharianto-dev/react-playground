using System.Collections.Generic;
using System.Threading.Tasks;
using MongoDB.Driver;
using react_playground_backend.Models;

namespace react_playground_backend.Services
{
    public class TestCollection1Service
    {
        private readonly IMongoCollection<TestCollection1> _testCollection1s;

        public TestCollection1Service(IReactPlaygroundDBDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _testCollection1s = database.GetCollection<TestCollection1>(settings.TestCollection1CollectionName);
        }

        public async Task<List<TestCollection1>> Get()
        {
            IAsyncCursor<TestCollection1> task = await _testCollection1s.FindAsync(tc1 => true);
            List<TestCollection1> allTestCollection = await task.ToListAsync();
            return allTestCollection;
        }

        public async Task<TestCollection1> GetById(string Id)
        {
            IAsyncCursor<TestCollection1> task = await _testCollection1s.FindAsync(tc1 => tc1.Id == Id);
            TestCollection1 selectedTestCollection = await task.FirstOrDefaultAsync();
            return selectedTestCollection;
        }

        public async void Create(TestCollection1 testCollection1)
        {
            await _testCollection1s.InsertOneAsync(testCollection1);
        }

        public async void Update(TestCollection1 testCollection1)
        {
            await _testCollection1s.ReplaceOneAsync(tc1 => tc1.Id == testCollection1.Id, testCollection1);
        }

        public async void RemoveById(string Id)
        {
            await _testCollection1s.DeleteOneAsync(tc1 => tc1.Id == Id);
        }
    }
}