import * as Papa from 'papaparse';

export async function fetchCSVData<T>(csvFilePath: string): Promise<T[]> {
    try {
        const response = await fetch(csvFilePath);
        const contentType = response.headers.get('content-type');

        if (!contentType || !contentType.includes('text/csv')) {
            throw new Error('Fetched content is not CSV.');
        }

        const csvString = await response.text();
        const parsedData = Papa.parse(csvString, {
            header: true, // Treat the first row as headers
            skipEmptyLines: true,
            dynamicTyping: true, // Automatically convert numbers and booleans
            transformHeader: header => header.trim().toLowerCase().replace(/\s/g, '_')
        });

        return parsedData.data as T[];
    } catch (error) {
        console.error('Error fetching or parsing CSV data:', error);
        return []; // Return an empty array on error
    }
}
