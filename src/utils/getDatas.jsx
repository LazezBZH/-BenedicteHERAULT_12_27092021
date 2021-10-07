import { useState, useEffect } from "react";
import PropTypes from "prop-types";

/**
 *
 * @param {string} url
 * @returns {object} data
 */

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();

      setData(data.data);
      setLoading(false);
      setError(false);
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

useFetch.propTypes = {
  url: PropTypes.string,
  method: PropTypes.string,
};
