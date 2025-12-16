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
          This report utilizes two primary datasets: the Yale Climate Opinion Maps 2024 (YCOM) and Howe et al. (2016). The full Yale Climate Opinion Maps 2024 dataset was obtained to enable longitudinal analysis of shifts in public opinion over time.
        </p>
        <p className="mt-8">
          While the YCOM model offers comprehensive, fine-grained insights into public opinion across multiple geographic and demographic levels, it does not provide aggregate temporal comparisons. This analysis addresses that methodological gap by examining changes in public climate opinion at a macro level over the eight-year period.
        </p>
      </section>

      <section id="insights">
        <h2>Insights</h2>
        <h3 id="insights-1">Rising awareness of climate change does not directly translate into support for policies aiming to mitigate it</h3>
        <figure>
          <Image
            src="/projects/climate_perception/policy_support_trends.png"
            alt="Insight 1 Visualization"
            width={800}
            height={400}
            className="my-4"
          />
          <figcaption>
            <strong>Figure 1.</strong> Temporal trends in national public support for selected policies (2016–2024). The y-axis indicates the proportion of individuals expressing support, and each line represents a unique policy item. Discontinuities in the series indicate years when specific policies were not included in the survey. The two oil drilling policies, highlighted in red, exhibit increasing support over time, contrasting with the overall downward or unchanged trend observed for other policies.
          </figcaption>
        </figure>
        <figure>
          <Image
            src="/projects/climate_perception/personal_impact.png"
            alt="Insight 1 Visualization"
            width={800}
            height={400}
            className="my-4"
          />
          <figcaption>
            <strong>Figure 2.</strong> Percentage point change from 2016 to 2024 in the proportion of respondents who believe that global warming will harm them personally to a moderate or great extent. Increases are evident across all states, with the most notable rises concentrated in the southwestern region, particularly Nevada, Colorado, Utah, Arizona, and New Mexico.
          </figcaption>
        </figure>
        <figure>
          <Image
            src="/projects/climate_perception/worried_trends.png"
            alt="Insight 1 Visualization"
            width={800}
            height={400}
            className="my-4"
          />
          <figcaption>
            <strong>Figure 3.</strong> Percentage point change from 2016 to 2024 in the proportion of individuals reporting being somewhat or very worried about global warming. Increases are observed across all states, with the largest gains concentrated in Colorado, Oregon, Minnesota, Indiana, and Maine
          </figcaption>
        </figure>
        <figure>
          <Image
            src="/projects/climate_perception/co2_regulation.png"
            alt="Insight 1 Visualization"
            width={800}
            height={400}
            className="my-4"
          />
          <figcaption>
            <strong>Figure 4.</strong> Percentage change (2024 vs. 2016) of people who somewhat/strongly support regulating CO2 as a pollutant. Overall, there is a decrease in the percentage of people supporting this policy across states, with some states seeing an increase.
          </figcaption>
        </figure>
        <figure>
          <Image
            src="/projects/climate_perception/renewable_support.png"
            alt="Insight 1 Visualization"
            width={800}
            height={400}
            className="my-4"
          />
          <figcaption>
            <strong>Figure 5.</strong> Percentage change (2024 vs. 2016) of people who somewhat/strongly support funding research into renewable energy sources. All states experienced a decrease in support for funding research into renewable energy sources.
          </figcaption>
        </figure>
        <p>Overall, there has been a notable increase in the percentage of individuals who express concern about climate change and who perceive themselves as personally affected by its impacts. However, <span className="text-black font-semibold">this rise in concern contrasts with a decline in support for climate-related policies</span>. Specifically, the percentage of respondents supporting funding for renewable energy research and regulating CO₂ as a pollutant has decreased in most states, while support for environmentally detrimental policies such as offshore oil drilling has increased.</p>
        <p>The results from Figure 1 align with those from a survey conducted by the AP-NORC Center for Public Affairs Research (2025), which also shows a decline in support for green and renewable energy. Sharpton et al. (2020) also pointed out that “this support can decline at the local level, particularly if renewable energy is perceived as having a negative local economic impact”.</p>
        <p>These trends appear contradictory, as greater awareness and concern about climate change would typically be expected to correspond with stronger policy support, especially given that CO2 is the primary greenhouse gas driving climate change and renewable energy sources are a potential solution to global warming. As shown in Figure 4, it is noteworthy that several states, namely Arizona, Oregon, Nevada, Minnesota, Massachusetts, North Carolina, and Florida, exhibit an increase in support for regulating CO₂ as a pollutant, warranting further investigation into the factors driving this divergence.</p>
        <h3 id="insights-2">Which variables are the most strongly correlated with supporting climate change policy?</h3>
        <figure>
          <Image
            src="/projects/climate_perception/corr_graph.png"
            alt="Insight 1 Visualization"
            width={800}
            height={400}
            className="my-4"
          />
          <figcaption>
            <strong>Figure 6.</strong> Correlation heatmap of climate opinion variables measured in Pearson’s r. The heatmap includes two categories of variables: risk perception (e.g., worry about climate change, perceived personal harm, harm to the U.S., developing countries, future generations, and plants, as well as beliefs about the immediacy of climate impacts) and policy support (e.g., funding and generating renewable energy, setting CO₂ limits, teaching global warming in schools, supporting the transition to 100% clean energy by 2050, implementing or refunding carbon taxes, and providing tax rebates for energy-efficient technologies). The grey cells in your heatmap represent missing values (NA) in the correlation matrix. This happens when there&apos;s insufficient data to calculate a correlation between those specific pairs of variables..
          </figcaption>
        </figure>
        <p className="mt-8">The results reveal that most risk perception variables are strongly associated with support for transitioning the U.S. to 100% clean energy by 2025 (r = 0.8–0.9). Notably, perceived personal harm demonstrates a weaker and variable relationship with policy support (r = 0.2-0.9), contrary to intuitive expectations that self-interest would motivate pro-climate attitudes. Interestingly, perceived harm to plants and animal species shows higher and most consistent correlations across all policy areas (Pearson’s r = 0.6-0.85), indicating that ecological concern may play a more salient role in shaping public support for climate policies than personal vulnerability.</p>
      </section>

      <section id="method">
        <h2>Methodology</h2>
        <p>For each type of analysis (i.e., change in percentage on macro-level, time-series, and correlation heatmap), I prepared data by obtaining open-sourced and high-quality data from Yale Climate Opinion Maps 2024 and the original data from Howe et. al, 2016. I uploaded the datasets manually in R as shown in the first screenshot under the names: <code>howe_etal_2016_metadata</code>, <code>howe_etal_2016_data</code>, and <code>ycom_publicdata_2010_2024</code>. 
        <p>Then, I skimmed through all datasets and realized that there is a difference in naming for some variables. As a result, I made sure that the variable names are consistent for the 2016 dataset and the 2010-2024 dataset by using name mapping and renaming. Next, I subset the 2010-2024 dataset to get a subset that only contains the metadata variables available in the 2016 dataset.</p>
        <p>I filtered all the rows where for every variable, the values for x2016 and x2024 are not N/A such that I could calculate the difference in percentage between these two years. Finally, I added a new column called percentage_diff to plot those values on a map.</p>
        </p>
      </section>

      <section id="future-directions">
        <h2>Future Directions</h2>
        <p>
        The analysis reveals an intriguing paradox in U.S. climate perceptions: while concern about global warming and perceived personal harm have increased across nearly all states, public support for key climate policies, such as regulating CO₂ as a pollutant or funding renewable energy research, has declined, while support for oil drilling has increased. This divergence suggests that rising awareness does not necessarily translate into sustained policy endorsement. The correlation heatmap further highlights strong associations between risk perceptions and policy support, but cannot reveal why individuals with certain perceptions favor or reject specific policies. The current dataset, though rich in quantitative indicators, cannot capture the psychological and contextual mechanisms underlying this discrepancy. Therefore, the next phase of research should adopt a mixed-methods approach to investigate why concern fails to convert into policy support and what factors mediate this relationship.
        </p>
        <p>
        The central research question guiding this proposal is: Why has public support for climate policies declined in the United States despite increasing awareness and concern about climate change? Two primary hypotheses emerge. The first posits that perceptions of local economic cost, particularly in communities economically dependent on fossil fuel industries, moderate the relationship between concern and policy support. The second proposes that political identity and media framing shape how individuals interpret climate information, creating ideological polarization in attitudes toward environmental regulation. Together, these hypotheses suggest that the observed paradox reflects economic self-interest and sociopolitical signaling rather than a lack of environmental awareness.
        </p>
        <p>
        To test these explanations, the study will employ a mixed-methods design that integrates quantitative modeling with qualitative inquiry. The quantitative component will extend the current analysis through multivariate regression models, testing how factors such as political affiliation, perceived economic impact, and trust in science mediate the relationship between climate concern and policy support. The qualitative component will involve semi-structured interviews or focus groups in selected states exhibiting divergent trends, such as Colorado (rising concern and support) and Texas (rising concern but declining support), to explore how individuals frame trade-offs between environmental protection and economic stability, and how they assess the credibility of climate information.
        </p>
        <p>
        Expected results are that individuals who perceive renewable energy and carbon regulation as economically beneficial to their communities will show consistent alignment between concern and policy support, whereas those who view such policies as economically threatening will exhibit attitudinal dissonance. These findings would suggest that effective climate communication should emphasize local economic opportunities and tangible co-benefits rather than focusing solely on global risks. By integrating behavioral and economic perspectives, this mixed-methods approach bridges the gap between quantitative trend analysis and qualitative understanding, offering a more comprehensive explanation of how Americans form and act on climate opinions.
        </p>
      </section>

      <section id="references">
        <h2>References</h2>
        <p>Sharpton, Tara, et al. “Drivers and Barriers to Public Acceptance of Future Energy Sources and Grid Expansion in the United States.” Renewable and Sustainable Energy Reviews, vol. 126, Jul. 2020, p. 109826. ScienceDirect, https://doi.org/10.1016/j.rser.2020.109826.</p>
        <p>AP-NORC Center for Public Affairs Research. “Declines in public support for green and renewable energy.” (June 2025). https://apnorc.org/projects/declines-in-public-support-for-green-and-renewable-energy/</p>
        <p>Marlon, J. R., Wang, X., Bergquist, P., Howe, P. Leiserowitz, A., Maibach, E., Mildenberger, M., and Rosenthal, S. (2022). "Change in US state-level public opinion about climate change: 2008–2020." Environmental Research Letters 17(12), 124046</p>
        <p>Howe, Peter D., Matto Mildenberger, Jennifer R. Marlon, and Anthony Leiserowitz (2015). “Geographic variation in opinions on climate change at state and local scales in the USA.” Nature Climate Change 5, DOI: 10.1038/nclimate2583.</p>
      </section>
    </DetailPage>
  );
}

