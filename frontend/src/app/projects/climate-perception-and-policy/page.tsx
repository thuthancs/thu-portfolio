import DetailPage from "@/layouts/DetailPage";
import { getAllProjects } from "@/lib/projects/mdx";
import Image from "next/image";

const TOC = [
  { id: "abstract", label: "Abstract" },
  { id: "insights", label: "Insights" },
  { id: "insights-1", label: "Awareness ≠ Policy Support", depth: 1 },
  { id: "insights-2", label: "Reasons for Policy Support", depth: 1 },
  { id: "method", label: "Methodology" },
  { id: "future-directions", label: "Future Directions" },
  { id: "research-question", label: "Research Question", depth: 1 },
  { id: "proposed-methods", label: "Proposed Methods", depth: 1 },
  { id: "thought-process", label: "Source Code & Thought Process" },
  { id: "references", label: "References" },
];

export default function ClimatePerceptionAndPolicyPage() {
  const project = getAllProjects().find((p) => p.slug === "climate-perception-and-policy");

  if (!project) {
    return (
      <DetailPage title="Project not found" summary="This project does not exist." toc={[]}>
        <p>The project you are looking for could not be found.</p>
      </DetailPage>
    );
  }

  return (
    <DetailPage title={project.title} tags={project.tags} summary={project.summary} toc={TOC}>
      <section id="abstract">
        <h2>Abstract</h2>
        <p>
          This report utilizes two primary datasets: Yale Climate Opinion Maps 2024 and Howe et al. (2016). The full YCOM 2024 dataset enables longitudinal analysis of shifts in public opinion over time.
        </p>
        <p className="mt-8">
          While the YCOM model provides fine-grained public opinion insights across locations and demographics, it does not by default support temporal comparisons. This analysis fills that gap by examining changes in macro-level U.S. climate opinion from 2016 to 2024.
        </p>
      </section>

      <section id="insights">
        <h2>Insights</h2>
        <h3 id="insights-1">
          Rising awareness of climate change does not directly translate into support for mitigation policies
        </h3>
        <figure>
          <Image
            src="/projects/climate_perception/policy_support_trends.png"
            alt="Trends in policy support from 2016-2024"
            width={800}
            height={400}
            className="my-4"
          />
          <figcaption>
            <strong>Figure 1.</strong> National trends in public support for selected policies, 2016–2024.
            The y-axis shows the proportion of respondents expressing support; each line is a unique policy.
            Discontinuities represent years when a policy was not surveyed. The two oil drilling items (red) show increasing support, contrasting with unchanged or declining trends for other policies.
          </figcaption>
        </figure>
        <figure>
          <Image
            src="/projects/climate_perception/personal_impact.png"
            alt="Personal harm beliefs 2016 to 2024"
            width={800}
            height={400}
            className="my-4"
          />
          <figcaption>
            <strong>Figure 2.</strong> Percentage-point change (2016→2024) in the share of respondents saying global warming will harm them personally (moderate/great extent). Rises occurred in all states, most notably in the Southwest (NV, CO, UT, AZ, NM).
          </figcaption>
        </figure>
        <figure>
          <Image
            src="/projects/climate_perception/worried_trends.png"
            alt="Changes in climate worry"
            width={800}
            height={400}
            className="my-4"
          />
          <figcaption>
            <strong>Figure 3.</strong> Change from 2016 to 2024 in percentage somewhat/very worried about global warming. All states increased, with Colorado, Oregon, Minnesota, Indiana, and Maine showing the largest gains.
          </figcaption>
        </figure>
        <figure>
          <Image
            src="/projects/climate_perception/co2_regulation.png"
            alt="CO2 regulation support"
            width={800}
            height={400}
            className="my-4"
          />
          <figcaption>
            <strong>Figure 4.</strong> Change in support, 2016→2024, for regulating CO₂ as a pollutant. In most states, support declined, though some states saw increases.
          </figcaption>
        </figure>
        <figure>
          <Image
            src="/projects/climate_perception/renewable_support.png"
            alt="Renewable research support"
            width={800}
            height={400}
            className="my-4"
          />
          <figcaption>
            <strong>Figure 5.</strong> Change in support, 2016→2024, for funding renewable energy research. Support declined in every state.
          </figcaption>
        </figure>
        <p>
          Overall, a higher proportion of people report concern about climate change and personal impacts. However, <span className="text-black font-semibold">this rise in concern contrasts with declining support for climate policies</span>—support for funding renewable energy research and CO₂ regulation has decreased in most states, while support for environmentally harmful policies such as oil drilling has risen.
        </p>
        <p>
          Figure 1 trends are consistent with AP-NORC Center data (2025) indicating similar declines. Sharpton et al. (2020) note that local support for renewables can decrease, especially where perceived as a negative economic force.
        </p>
        <p>
          These trends seem contradictory: greater awareness and concern would normally predict stronger policy support, especially since CO₂ is the main greenhouse gas and renewables a solution. As seen in Figure 4, some states (Arizona, Oregon, Nevada, Minnesota, Massachusetts, North Carolina, Florida) actually increased support for CO₂ regulation—suggesting state-level divergence worth further investigation.
        </p>
        <h3 id="insights-2">
          Risk perceptions are strongly correlated with policy support, but the strength of these links varies by perception type
        </h3>
        <figure>
          <Image
            src="/projects/climate_perception/corr_graph.png"
            alt="Correlation heatmap of climate opinion indicators"
            width={800}
            height={400}
            className="my-4"
          />
          <figcaption>
            <strong>Figure 6.</strong> Correlation heatmap (Pearson’s r) for climate opinion variables. Variables are grouped as “risk perception” (worry, personal harm, harm to US/others/future/plants, immediacy) and “policy support” (renewables, CO₂ limits, teaching, 100% clean transition, carbon tax, tax rebates). Grey cells mean insufficient data (NA) for some pairs.
          </figcaption>
        </figure>
        <p className="mt-8">
          Most risk perception variables are strongly linked to support for a 100% clean energy transition (r = 0.8–0.9). Perceived personal harm, unexpectedly, has a weaker and less consistent tie to policy support (r = 0.2–0.9); concern for plants/animals shows higher, more consistent correlations across policy domains (r = 0.6–0.85). Thus, ecological concern may more strongly drive opinions than personal vulnerability.
        </p>
      </section>

      <section id="method">
        <h2>Methodology</h2>
        <p>
          Each analysis (percentage change, time-series, correlation) used publicly available data from Yale Climate Opinion Maps 2024 and Howe et al. (2016). In R, I uploaded datasets named <code>howe_etal_2016_metadata</code>, <code>howe_etal_2016_data</code>, and <code>ycom_publicdata_2010_2024</code>.
        </p>
        <p>
          I standardized variable names across the 2016 and 2010–2024 datasets (they differed initially), using mapping and renaming. Then I subset the 2010–2024 dataset to match only metadata variables available in the 2016 release.
        </p>
        <p>
          I filtered for entries where 2016 and 2024 values were both present, to compute the percentage difference over that period. Finally, a new <code>percentage_diff</code> column was added for plotting these changes.
        </p>
      </section>

      <section id="future-directions">
        <h2>Future Directions</h2>
        <p>
          The analysis highlights an important paradox: although concern and perceived harm from climate change have risen nearly everywhere, support for key mitigation policies (CO₂ regulation, renewables funding) has declined, while support for drilling increased. This decoupling means rising awareness does not guarantee continued policy support. The correlation heatmap shows strong risk-policy associations, but not the reasons some perceptions become policy support. The dataset is rich, but limited in revealing underlying mechanisms. Next steps should involve mixed-methods to understand why concern often fails to convert into policy support.
        </p>
        <h3 id="research-question">Research Question</h3>
        <p className="highlight">
          Why has public support for climate policies dropped in the United States, despite rising awareness and concern?
        </p>
        <p>
          Two main hypotheses: (1) Perceived local economic costs—especially in fossil-fuel-dependent areas—may reduce policy support even among the concerned; (2) Political identity and media framing could polarize responses, shaping policy opinions by ideology rather than by climate concern per se. Together, these suggest the paradox reflects economic and sociopolitical forces as much as simple awareness.
        </p>
        <h3 id="proposed-methods">Proposed Methods</h3>
        <p>
          To test this, a mixed-methods design will be used: quantitatively, regression models will examine moderation by political attachment, perceived economic impact, and science trust; qualitatively, interviews or focus groups in states like Colorado (rising concern/support) and Texas (rising concern/falling support) will examine how individuals balance environmental and economic needs and interpret information.
        </p>
        <p>
          Expectation: those who view renewables/regulation as economically beneficial to their communities will show matched concern and policy support; those who view them as a threat will express “dissonance.” Implication: effective climate communication should emphasize local economic opportunities and tangible co-benefits, not just risks. Combining behavioral and economic perspectives will bridge the gap between trend data and real-life motivation.
        </p>
      </section>
      <section id="thought-process">
        <h2>Source Code & Thought Process</h2>
        <p>All R code used for this analysis can be found <a href="https://github.com/thuthancs/research-data-analysis" target="_blank" rel="noopener noreferrer">here</a>.</p>
        <p>I identified 2 primary questions I wanted to answer and used different data analysis techniques to answer them. Firstly, I used a time-series data, plotted in a line graph to see how the percentage of people supporting different policies changed over time on a national level. To do this, I created a function to calculate the averages for each variable-year pair and highlighted notable trends. Secondly, I used a U.S map to plot the percentage differences between 2024 and 2016 to answer the same question to see how public opinions or risk perceptions have changed over time. This type of analysis provides me with a high-level overview across states of whether there is an increase or decrease in certain variables. Lastly, I used a regression correlation technique to analyze which risk perception variable is most correlated with a certain policy. This type of analysis offers me insights into which independent variable (risk perception) is consistently correlated with support for all policies or which one is highly correlated of a specific policy. All of the analyses are conducted in R with popular packages such as ggplot, tidyverse, and dplyr.</p>
        <p>I used <strong>#dataviz</strong> to write descriptive captions for all the plots, decide on the appearance of the plot that is easy to read for my audience (i.e., it should not contain too much information or color that makes it hard for us to spot the trend), and naming of the legends/labels. For example, in Figure 1, I used a line plot to show how the public opinions have changed in supporting different climate-related policies. There are 9 such policies and letting R automatically generating different colors for each policy would create too much information to absorb in a graph and it is also extremely hard to see. As a result, since I noticed a pattern that almost all other policies have seen a decline or no change, except for 2 drilling oil policies, I decided to color them in red and leave other lines as grey. By this way, a striking pattern becomes much more noticeable. I also rename the variable to be more human-readable instead of keeping the original variable name.</p>
        <p>I applied <strong>#gapanalysis</strong> consistently throughout the data analysis process to identify gaps in the current dataset and methods, and to determine the type of analyses to conduct or the method to propose for building upon the existing literature. For example, when I looked at the YCOM2024 dataset, I realized that even though the dataset is very fine-grained and I can choose a specific state to see the percentage in different variables and hover over the state to see a line graph over time, it does not immediately give me an answer of whether the public has become more aware or worried about global warming or more supportive of climate change policies. As a result, I added another perspective by computing the difference between two years across states, allowing me to immediately notice where things changed in all states or if there was any polarization. I also applied this HC to help me develop the methodology proposal by identifying what’s missing from the current quantitative datasets and which questions they fail to answer that necessitates more qualitative data. </p>
        <p>I used AI, specifically Claude, extensively to help me with the coding in R and I think this is the part where AI was very helpful to me. First of all, because it saved me so much time from being bogged down by logistical details of how to implement something in R such as renaming column names, extracting a subset of data and creating a plot. Secondly, when I made all the decisions beforehand, such as what questions I am trying to answer, how I envision my dataset to look like (i.e., what variables to include and what extra columns to created), and what kind of plots I want to make as well as their appearance (i.e., color choice, shapes, and legend labels), AI helped me become more productive because I know exactly what to actually ask it to do for me, and it allows me to dedicate my energy and time thinking about what’s most important: the insights, gaps, and potential methods. If I am proficient in R, then I think I don’t even need to use AI but because I’m still uncomfortable with the language, I decided to use it in this assignment so I can focus more on the research skills, instead of the programming skills.</p>
      </section>

      <section id="references">
        <h2>References</h2>
        <p>
          Sharpton, Tara, et al. “Drivers and Barriers to Public Acceptance of Future Energy Sources and Grid Expansion in the United States.” Renewable and Sustainable Energy Reviews, vol. 126, Jul. 2020, p. 109826. ScienceDirect, 
          <a href="https://doi.org/10.1016/j.rser.2020.109826" target="_blank" rel="noopener noreferrer">https://doi.org/10.1016/j.rser.2020.109826</a>
        </p>
        <p>
          AP-NORC Center for Public Affairs Research. “Declines in public support for green and renewable energy.” (June 2025).
          <a href="https://apnorc.org/projects/declines-in-public-support-for-green-and-renewable-energy/" target="_blank" rel="noopener noreferrer">https://apnorc.org/projects/declines-in-public-support-for-green-and-renewable-energy/</a>
        </p>
        <p>
          Marlon, J. R., Wang, X., Bergquist, P., Howe, P., Leiserowitz, A., Maibach, E., Mildenberger, M., and Rosenthal, S. (2022). "Change in US state-level public opinion about climate change: 2008–2020." Environmental Research Letters 17(12), 124046.
        </p>
        <p>
          Howe, Peter D., Matto Mildenberger, Jennifer R. Marlon, and Anthony Leiserowitz (2015). “Geographic variation in opinions on climate change at state and local scales in the USA.” Nature Climate Change 5, DOI: <a href="https://www.nature.com/articles/nclimate2583">10.1038/nclimate2583</a>.
        </p>
      </section>
    </DetailPage>
  );
}

